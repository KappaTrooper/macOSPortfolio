import { WindowControls } from '#components';
import { techStack, locations } from '#constants';
import useWindowStore from '#store/window';
import WindowWrapper from '#hoc/WindowWrapper';
import { Check } from 'lucide-react';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';

const TechStackOutput = () => (
  <div className='techstack'>
    <div className='label'>
      <p className='w-32'>Category</p>
      <p>Technologies</p>
    </div>

    <ul className='content'>
      {techStack.map(({ category, items }) => (
        <li key={category} className='flex items-center'>
          <Check className='check' size={20} />
          <h3>{category}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                {index < items.length - 1 ? "," : ""}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>

    <div className='footnote'>
      <p>
        <Check size={20} /> 5 of 5 stacks successfully (100%)
      </p>

      <p className="text-text-primary">
        Render time: 6ms
      </p>
    </div>
  </div>
);

const HelpOutput = () => (
  <ul className='help'>
    <li><span>help</span> — list available commands</li>
    <li><span>whoami</span> — who's typing this</li>
    <li><span>date</span> — current date and time</li>
    <li><span>ls</span> — list projects I've worked on</li>
    <li><span>techstack</span> — show my tech stack</li>
    <li><span>clear</span> — clear the terminal</li>
  </ul>
);

const LsOutput = () => (
  <ul className='ls'>
    {locations.work.children.map((project) => (
      <li key={project.id}>{project.name}</li>
    ))}
  </ul>
);

const COMMANDS = {
  help: () => <HelpOutput />,
  whoami: () => "ajay — front-end web developer",
  date: () => dayjs().format('dddd, MMMM D YYYY, h:mm:ss A'),
  ls: () => <LsOutput />,
  techstack: () => <TechStackOutput />,
  'sudo make me a sandwich': () => "Nice try. Permission denied: you're not root.",
};

const Terminal = () => {
  const isOpen = useWindowStore((state) => state.windows.terminal.isOpen);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [commandLog, setCommandLog] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const id = requestAnimationFrame(() => inputRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [isOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history]);

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    if (!trimmed) return;

    setCommandLog((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInput('');

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      return;
    }

    const handler = COMMANDS[trimmed.toLowerCase()];
    const output = handler ? handler() : `command not found: ${trimmed}`;

    setHistory((prev) => [
      ...prev,
      { id: `${prev.length}-in`, type: 'input', content: trimmed },
      { id: `${prev.length}-out`, type: 'output', content: output },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandLog.length - 1 : Math.max(historyIndex - 1, 0);
      setHistoryIndex(nextIndex);
      setInput(commandLog[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIndex = historyIndex + 1;
      if (nextIndex >= commandLog.length) {
        setHistoryIndex(-1);
        setInput('');
      } else {
        setHistoryIndex(nextIndex);
        setInput(commandLog[nextIndex]);
      }
    }
  };

  const focusInput = () => {
    if (window.getSelection().toString() === '') inputRef.current?.focus();
  };

  return (
    <>
      <div id='window-header'>
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className='terminal-body' onClick={focusInput}>
        <div className='terminal-history' ref={scrollRef}>
          <p className='intro'>
            <span className='font-bold'>@ajay % </span>
            type <span className='font-bold'>help</span> to get started
          </p>

          {history.map((entry) => (
            entry.type === 'input' ? (
              <p key={entry.id}>
                <span className='font-bold'>@ajay % </span>
                {entry.content}
              </p>
            ) : (
              <div key={entry.id} className='terminal-output'>{entry.content}</div>
            )
          ))}
        </div>

        <div className='terminal-input-row'>
          <span className='font-bold'>@ajay % </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete='off'
            className='flex-1'
          />
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal')

export default TerminalWindow
