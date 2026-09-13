import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper"
import { Download } from "lucide-react"
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const containerRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver(([entry]) => {
      setPageWidth(entry.contentRect.width);
    });
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id='window-header'>
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>
        <a href="files/resume.pdf" download className="cursor-pointer" title="Download Resume">
          <Download className="icon"/>
        </a>
      </div>

      <div className="resume-viewer" ref={containerRef}>
        <Document file="files/resume.pdf">
          <Page pageNumber={1} width={pageWidth ?? undefined} renderedTextLayer renderedAnnotationLayer />
        </Document>
      </div>
    </>
  );
}
const ResumeWindow = WindowWrapper(Resume, 'resume')
export default ResumeWindow
