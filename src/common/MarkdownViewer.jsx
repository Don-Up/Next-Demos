import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import {MarkdownContainer} from "@/common/MarkdownContainer";

// 动态加载 CSS 和 highlight.js
const MarkdownViewer = ({ filePath, className = '', style = {} }) => {
    const [content, setContent] = useState('');

    // 动态加载 CSS
    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('highlight.js/styles/github-dark.css');
        }
    }, []);

    // 加载 Markdown 内容并处理高亮
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Fetch Markdown file
            fetch(filePath)
                .then((response) => response.text())
                .then(async (text) => {
                    // 动态加载 highlight.js
                    const hljs = (await import('highlight.js')).default;

                    // Convert Markdown to HTML with syntax highlighting
                    const htmlContent = marked(text, {
                        highlight: (code, language) => {
                            return hljs.highlightAuto(code).value;
                        },
                    });
                    setContent(htmlContent);
                })
                .catch((error) => console.error('Error fetching markdown:', error));
        }
    }, [filePath]);

    // 确保在内容加载后执行高亮
    useEffect(() => {
        if (content && typeof window !== 'undefined') {
            // 动态加载 highlight.js 并高亮所有代码块
            import('highlight.js').then((hljs) => {
                hljs.default.highlightAll();
            });
        }
    }, [content]); // 依赖 content，确保每次内容变化时重新高亮

    return (
        <MarkdownContainer
            className={className}
            style={{paddingTop: "20px", ...style}}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
};

export default MarkdownViewer;