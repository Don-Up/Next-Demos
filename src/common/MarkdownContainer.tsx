import styled from "styled-components";

export const MarkdownContainer = styled.div`
    :root {
        --text-color: #c8d1d9;
        --bg-color: #0d1117;
        --side-bar-bg-color: #0d1117;
        --control-text-color: #a9aaab;
        --primary-color: #f9826c;
        --primary-btn-border-color: #f9826c;
        --active-file-text-color: inherit;
        --active-file-border-color: #f9826c;
        --active-file-bg-color: #0d1117;
        --primary-btn-text-color: #f9826c;
        --window-border: 0 solid #0d1117;
        --item-hover-bg-color: #161b22;
        --item-hover-text-color: #f9826c;
        --meta-content-color: #f9826c;
        --search-select-text-color: #f9826c;
        --control-text-color: var(--text-color);
        --control-text-hover-color: var(--text-color);
        --heading-char-color: #f9826c;
        --active-toggle-btn-color: #192133;
        --blur-text-color: rgba(200, 200, 200, 0.33);
        --rawblock-edit-panel-bd: var(--item-hover-bg-color) !important;
        --select-text-bg-color: rgba(53, 82, 116, 0.97) !important;
        --select-text-font-color: #fff !important;
        --color-border-secondary: #21262d !important;
        --mermaid-node-color: #b87f62 !important;
        --mermaid-node-border: #bd7958;
        --mermaid-contrast-color: #afe61d;
        --mermaid-theme: dark;
        --monospace: ui-monospace,
        Menlo, Monaco,
        "Cascadia Mono", "Segoe UI Mono",
        "Roboto Mono",
        "Oxygen Mono",
        "Ubuntu Monospace",
        "Source Code Pro",
        "Fira Mono",
        "Droid Sans Mono",
        "Courier New", monospace;
    }

    hr {
        display: none;
    }

    .pane-group {
        background-color: var(--bg-color);
    }

    .dropdown-menu {
        background-color: var(--bg-color) !important;
        border: 1px solid var(--item-hover-bg-color) !important;
        color: #8b949e !important;
    }

    .dropdown-menu > li > a {
        border-left: 1px solid var(--bg-color);
        border-right: 1px solid var(--bg-color);
        color: var(--text-color) !important;
    }

    .dropdown-menu > li > a:hover {
        background-color: var(--item-hover-bg-color);
        border-left: 1px solid var(--bg-color);
        border-right: 1px solid var(--bg-color);
        color: var(--text-color) !important;
    }

    body {
        line-height: 1.5;
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 500;
    }

    #write {
        background-color: var(--bg-color) !important;
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 500;
        max-width: 860px;
        margin: 0 auto;
        padding: 30px;
    }

    @media only screen and (min-width: 1400px) {
        #write {
            max-width: 1024px;
        }
    }

    @media only screen and (min-width: 1800px) {
        #write {
            max-width: 1200px;
        }
    }

    #write > ul:first-child,
    #write > ol:first-child {
        font-weight: 500;
        margin-top: 30px;
    }

    content {
        background-color: var(--bg-color) !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: var(--text-color);
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 400;
        padding-top: 5px;
    }

    h1 {
        color: #2585a6;
    }

    h2 {
        color: #426ab3;
    }

    h3 {
        color: #45b97c;
        font-size: 1.75rem;
        padding-bottom: 0.5rem; /* 为了给下方的横线留出一些空间 */
        border-bottom: 2px solid #45b97c; /* 横线的颜色和粗细 */
        margin-bottom: 1rem; /* 让标题与下方内容有一定的距离 */
    }

    h4 {
        color: #cd9a5b;
    }

    b, strong {
        color: #fcaf17;
    }

    html {
        font-size: 13px;
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 500;
    }

    #write {
        text-align: left;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        position: relative;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: bold;
        line-height: 1.5;
        cursor: text;
    }

    h1:hover a.anchor,
    h2:hover a.anchor,
    h3:hover a.anchor,
    h4:hover a.anchor,
    h5:hover a.anchor,
    h6:hover a.anchor {
        text-decoration: none;
    }

    h1 tt,
    h1 code {
        font-size: inherit;
    }

    h2 tt,
    h2 code {
        font-size: inherit;
    }

    h3 tt,
    h3 code {
        font-size: inherit;
    }

    h4 tt,
    h4 code {
        font-size: inherit;
    }

    h5 tt,
    h5 code {
        font-size: inherit;
    }

    h6 tt,
    h6 code {
        font-size: inherit;
    }

    h1 {
        font-size: 2.6rem;
        padding-bottom: .15rem;
        border-bottom: 1px solid var(--color-border-secondary);
    }

    h2 {
        font-size: 1.9rem;
        padding-bottom: .15rem;
        border-bottom: 1px solid var(--color-border-secondary);
    }

    h3 {
        font-size: 1.7rem;
    }

    h4 {
        font-size: 1.4rem;
    }

    h5 {
        font-size: 1.2rem;
    }

    h6 {
        font-size: 1rem;
        color: rgb(139, 148, 158);
    }

    h1.md-focus:before,
    h2.md-focus:before,
    h3.md-focus:before,
    h4.md-focus:before,
    h5.md-focus:before,
    h6.md-focus:before {
        content: '';
        border: 0;
    }

    p {
        color: var(--text-color);
        line-height: 1.20rem;
        margin: 0 0 1.25rem;
    }

    kbd {
        display: inline-block;
        padding: 3px 5px;
        font: 11px ui-monospace,
        Menlo, Monaco,
        "Cascadia Mono", "Segoe UI Mono",
        "Roboto Mono",
        "Oxygen Mono",
        "Ubuntu Monospace",
        "Source Code Pro",
        "Fira Mono",
        "Droid Sans Mono",
        "Courier New", monospace;
        line-height: 10px;
        color: #b1bac4;
        vertical-align: middle;
        background-color: var(--bg-color);
        border-bottom-color: #6e7681;
        border: 1px solid #6e7681;
        border-radius: 6px;
        box-shadow: inset 0 -1px 0 #6e7681;
    }

    p {
        font-size: 1.25rem;
        line-height: 1.5;
    }

    table {
        font-size: 1.25rem;
    }


    a,
    .md-def-url {
        color: #58a6ff;
        text-decoration: none;
    }

    a:hover {
        color: #58a6ff;
        text-decoration: underline;
    }

    /* Summary */

    .md-toc {
        margin-left: 0;
        margin-right: 0;
    }

    .md-toc-content {
        background-color: var(--item-hover-bg-color) !important;
        border-radius: 6px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    #write div.md-toc-tooltip {
        background-color: var(--item-hover-bg-color) !important;
        border: 1px solid var(--item-hover-bg-color);
        padding-left: 5px;
        font-size: 1.4rem;
        color: var(--text-color);
    }

    .md-toc:focus .md-toc-content {
        border: 1px solid var(--item-hover-bg-color);
    }

    .md-delete-toc {
        color: var(--text-color);
    }

    table {
        margin-bottom: 20px;
        line-height: 24px;
    }

    table th,
    table td {
        padding: 8px;
        line-height: 1.25rem;
        vertical-align: middle;
        border-top: 1px solid #3D454D;
    }

    table th {
        font-weight: 700;
        padding: 6px 13px;
    }

    table caption + thead tr:first-child th,
    table caption + thead tr:first-child td,
    table colgroup + thead tr:first-child th,
    table colgroup + thead tr:first-child td,
    table thead:first-child tr:first-child th,
    table thead:first-child tr:first-child td {
        border-top: 0;
    }

    table tbody + tbody {
        border-top: 2px solid #3D454D;
    }

    table tr th {
        border: 1px solid #324560;
        border-bottom: solid 2px #3D454D;
        border-bottom: 0;
        font-weight: 700;
        margin: 0;
        padding: 10px 16px;
    }

    table tr td {
        background: #192534;
        border: 1px solid #3D454D;
        margin: 0;
        padding: 10px 16px;
    }

    table tr th:first-child,
    table tr td:first-child {
        margin-top: 0;
    }

    table tr th:last-child,
    table tr td:last-child {
        margin-bottom: 0;
    }

    table {
        padding: 0;
        word-break: initial;
    }

    table tr {
        border-top: 1px solid #3D454D;
        margin: 0;
        padding: 0;
    }

    thead {
        background-color: var(--bg-color);
        color: var(--text-color);
    }

    table tr th {
        border: 1px solid #3D454D;
        border-bottom: solid 2px #ccc;
        border-bottom: 0;
        font-weight: 700;
        margin: 0;
        padding: 10px 16px;
    }

    table tr td {
        background: #192534;
        border: 1px solid #3D454D;
        margin: 0;
        padding: 10px 16px;
        line-height: 1.6rem;
    }

    table tr th:first-child,
    table tr td:first-child {
        margin-top: 0;
    }

    table tr th:last-child,
    table tr td:last-child {
        margin-bottom: 0;
    }

    table tr:nth-child(2n),
    table tr:nth-child(1n) td {
        background-color: var(--item-hover-bg-color);
    }

    table tr:nth-child(2n),
    table tr:nth-child(2n) td {
        background-color: var(--bg-color);
    }

    .md-fences,
    tt {
        color: var(--item-hover-bg-color);
        font-size: 1.05rem;
        font-weight: 500;
    }

    code:not(pre code) {
        padding: .18rem .4rem .22rem;
        margin: 0;
        font-size: 1.01rem;
        background-color: #343941;
        border-radius: 6px;
        font-family: ui-monospace,
        Menlo, Monaco,
        "Cascadia Mono", "Segoe UI Mono",
        "Roboto Mono",
        "Oxygen Mono",
        "Ubuntu Monospace",
        "Source Code Pro",
        "Fira Mono",
        "Droid Sans Mono",
        "Courier New", monospace;
        font-weight: 400;
        line-height: 1.5;
        color: #b2d235;
    }

    #write pre.md-meta-block {
        background-color: var(--item-hover-bg-color);
        border: 0;
        border-radius: 3px;
        color: #fff;
        font-size: 100%;
        line-height: 1.45;
        margin-top: 0 !important;
        padding: 1rem;
    }

    .mathjax-block > .code-tooltip {
        bottom: .375rem;
    }

    .md-mathjax-midline {
        background: #fafafa;
    }

    .md-image > .md-meta {
        border-radius: 6px;
        color: inherit;
        font-size: .9rem;
        padding: 2px 0 0 4px;
    }

    .md-tag {
        color: #70bfd9;
        opacity: 1;
    }

    .CodeMirror-line {
        padding-left: 15px;
    }

    .code-tooltip {
        background: var(--item-hover-bg-color);
        border: 1px solid var(--item-hover-bg-color);
        box-shadow: 0 1px 1px 0 rgba(0, 28, 36, .3);
        border-radius: 6px;
    }

    /* Yellow border when focusing Code block language input */

    .code-tooltip .ty-input {
        border: 0;
    }

    /* Languages suggestions Menu */

    .auto-suggest-container {
        background-color: var(--item-hover-bg-color);
        border: 1px solid var(--item-hover-bg-color);
        color: var(--text-color);
        border-radius: 6px;
    }

    .dropdown-menu {
        color: #70c0d8;
        margin-right: 5px;
    }

    .md-fences {
        padding: .3rem;
        font-size: .9rem;
        margin-left: .2rem;
        margin-right: .2rem;
    }

    .md-fences {
        margin: 0 0 20px;
        font-size: 1.105rem;
        padding: 0;
        padding-top: .4rem;
    }

    blockquote .md-end-block.md-heading {
        color: inherit;
    }

    blockquote .md-end-block.md-heading:before {
        content: '' !important;
    }

    blockquote {
        margin: 0 0 1rem;
        padding: 0 1rem;
        border-left: .25rem solid #3b434b;
    }

    blockquote,
    blockquote p {
        line-height: 1.5;
        color: #8b949e;
    }

    .MathJax_Display {
        font-size: 1rem !important;
        margin-top: .5rem;
        margin-bottom: 0;
    }

    .md-math-block {
        font-size: 1.4rem;
    }

    .md-rawblock-tooltip .md-rawblock-control {
        background-color: var(--item-hover-bg-color);
    }

    /* Edit Math Blocks */

    .md-rawblock-control:not(.md-rawblock-tooltip) {
        font-size: 1.105rem;
        background-color: var(--item-hover-bg-color);
    }

    .md-rawblock-control .CodeMirror.cm-s-inner {
        border: 0px;
    }

    /* Inline Math Editing */

    .md-inline-math script {
        color: #f9826c;
    }

    .md-math-tex inline-math-svg {
        font-size: 1.4rem;
    }

    .md-rawblock-panel .code-tooltip {
        border: 0px;
    }

    .md-rawblock > .md-rawblock-container {
        transition: 0.5s;
    }

    .md-rawblock > .md-rawblock-tooltip {
        transition: 0.5s;
        display: block;
        visibility: hidden;
        opacity: 0;
    }

    .md-rawblock:hover > .md-rawblock-tooltip {
        transition: 0.5s;
        visibility: visible;
        opacity: 1;
        animation: none;
    }

    p.mathjax-block,
    .mathjax-block {
        padding-bottom: 0;
    }

    .mathjax-block > .code-tooltip {
        bottom: 5px;
        box-shadow: none;
    }

    .md-image > .md-meta {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    .md-image > img {
        margin-top: 2px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .md-image > .md-meta:first-of-type:before {
        padding-left: 4px;
    }

    #typora-source {
        color: var(--text-color);
    }

    .typora-sourceview-on #toggle-sourceview-btn {
        color: var(--text-color);
        background-color: #484f58;
    }

    #md-searchpanel input {
        background-color: #21262d !important;
        border: 1px solid #30363d;
    }

    #md-searchpanel .btn {
        font-size: 11px;
    }

    #md-searchpanel .btn:hover {
        color: #8b949e;
    }

    #md-notification .ty-enter-mode-warning-header {
        color: #f9826c;
    }

    #md-notification p,
    #md-notification .btn,
    #md-notification label {
        font-size: 13px !important;
    }

    .megamenu-menu-panel .btn {
        border: 1px solid #ccc;
    }

    .on-focus-mode blockquote {
        border-left-color: rgba(85, 85, 85, 0.12);
    }

    header,
    .context-menu,
    .megamenu-content,
    footer {
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 500;
    }

    .megamenu-opened header {
        background-image: none;
    }

    .file-node-content .fa-caret-right,
    .file-node-content .fa-caret-down {
        color: #f9826c;
    }

    #typora-sidebar #ty-sidebar-footer {
        background-color: var(--item-hover-bg-color) !important;
        border-top: 0 solid #090b10;
    }

    .megamenu-menu-list li:not(.saved) a:not(.active):hover,
    .megamenu-menu-list li a.active {
        background: var(--item-hover-bg-color) !important;
    }
    
    .mac-seamless-mode #typora-sidebar {
        background-color: var(--item-hover-bg-color);
        border-right: 0 solid #090c12;
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 500;
    }

    titlebar {
        background-color: var(--bg-color);
    }

    /* Sidebar header on Win/Linux (Files/Plan) */

    .info-panel-tab-title {
    }

    /* Plan should get the same sidebar background color on Win/Linux */

    .typora-node.pin-outline:not(.megamenu-opened):not(.typora-sourceview-on) #typora-sidebar {
        background-color: var(--item-hover-bg-color)
    }

    /* Bottom border on Win/Linux Sidebar */

    .info-panel-tab-border {
        background-color: #f9826c !important;
    }

    .sidebar-footer-item:hover {
        background-color: inherit;
    }

    .sidebar-tab.active {
        color: var(--text-color);
        font-weight: 700;
    }

    .file-node-icon,
    .file-node-open-state {
        color: #6E7681;
    }

    .fa-file-text-o:before {
        color: var(--text-color) !important;
    }

    .md-lang {
        color: #b4654d;
    }

    .html-for-mac .context-menu {
        --item-hover-bg-color: var(--bg-color);
        color: #efb752;
    }

    hr {
        background-color: #30363d;
        border: 0 none;
        box-sizing: content-box;
        height: 0.25rem;
        margin: 16px 0;
        overflow: hidden;
        padding: 0;
    }

    input {
        color: #82bed6;
    }

    #searchpanel-word-option-btn,
    #find-and-replace-icon-word,
    #find-and-replace-icon-case,
    .searchpanel-search-option-btn,
    .icon,
    .glyphicon .popover,
    .popover-title {
        color: #82bed6 !important;
        fill: #82bed6 !important;
    }

    #md-notification .btn {
        border: 0;
    }

    .show-word-count #footer-word-count {
        background: #000;
    }

    #recent-file-panel-action-btn {
        background-color: #82bed6;
    }

    .dropdown-menu .divider {
        border-color: #303d50;
    }

    .ty-preferences .window-content {
        background-color: #fafafa;
    }

    .ty-preferences .nav-group-item.active {
        background: var(--bg-color);
        color: var(--text-color);
    }

    /* Code block */

    .cm-s-inner {
        border: 1px solid #324560;
        border-radius: 6px;
        padding: 1.2rem 1rem;
    }

    .cm-s-inner .cm-link,
    .cm-s-inner.cm-link {
        color: #d2a8ff;
    }

    .cm-s-inner .cm-header {
        color: #d2a8ff;
    }

    .cm-s-inner.CodeMirror,
    .cm-s-inner .CodeMirror-gutters {
        background-color: var(--item-hover-bg-color) !important;
        border: 1px solid var(--item-hover-bg-color);
    }

    .cm-s-inner .CodeMirror-gutters {
        border: 0;
        color: #6d8a88;
    }

    #typora-source .CodeMirror-gutter-wrapper {
        font-size: 1rem;
    }

    /* Code block in Source Mode. If activated, borders are nicer but displayed funny when stacked
    #typora-source .cm-s-inner {
    border-radius: 6px;
    }
    */

    .cm-s-inner .CodeMirror-cursor {
        border-left: solid thin #f8f8f2 !important;
    }

    .cm-s-inner .CodeMirror-linenumber {
        color: #6d8a88;
    }

    .cm-s-inner .CodeMirror-line::selection,
    .cm-s-inner .CodeMirror-line::-moz-selection,
    .cm-s-inner .CodeMirror-line > span::selection,
    .cm-s-inner .CodeMirror-line > span::-moz-selection,
    .cm-s-inner .CodeMirror-line > span > span::selection,
    .cm-s-inner .CodeMirror-line > span > span::-moz-selection {
        background: rgba(255, 255, 255, .1);
    }

    .cm-s-inner span.cm-comment {
        color: #8b949e;
        font-style: normal;
    }

    .cm-s-inner span.cm-string,
    .cm-s-inner span.cm-string-2,
    .cm-s-inner span.cm-quote {
        color: #a5d6ff;
    }

    .cm-s-inner span.cm-number {
        color: #79c0ff;
    }

    .cm-s-inner span.cm-variable {
        color: var(--text-color);
    }

    .cm-s-inner span.cm-variable-2 {
        color: var(--text-color);
    }

    .cm-s-inner span.cm-def {
        color: var(--text-color);
    }

    .cm-s-inner span.cm-operator {
        color: #ff7b72;
    }

    .cm-s-inner span.cm-keyword {
        color: #ff7b72;
    }

    .cm-s-inner span.cm-atom {
        color: #8b949e;
    }

    .cm-s-inner span.cm-meta {
        color: #8b949e;
    }

    .cm-s-inner span.cm-tag {
        color: #7ee787;
    }

    .cm-s-inner span.cm-attribute {
        color: #79c0ff;
    }

    .cm-s-inner span.cm-defined {
        color: #d2a8ff;
    }

    .cm-s-inner span.cm-qualifier {
        color: #50fa7b;
    }

    .cm-s-inner span.cm-property {
        color: #d2a8ff;
    }

    .cm-s-inner span.cm-builtin {
        color: #79c0ff;
    }

    .cm-s-inner span.cm-variable-3 {
        color: #ff7b72;
    }

    .cm-s-inner span.cm-block-start {
        color: #ffa657;
    }

    .cm-s-inner span.cm-type {
        color: #ffb86c;
    }

    .cm-positive {
        color: #aff5b4;
        background-color: #033a16;
    }

    .cm-negative {
        color: #aff5b4;
        background-color: #67060c;
    }

    .md-fences.md-focus .cm-s-inner .CodeMirror-activeline-background {
        background: rgba(255, 255, 255, 0.1);
    }

    .cm-s-inner .CodeMirror-matchingbracket {
        color: var(--text-color) !important;
        text-decoration: underline;
    }

    .cm-s-inner .CodeMirror-selected,
    .cm-s-inner .CodeMirror-selectedtext,
    body::selection,
    body::-moz-selection {
        background: var(--select-text-bg-color) !important;
        background-color: var(--select-text-bg-color) !important;
        color: var(--select-text-font-color) !important;
        text-shadow: none;
    }

    #write ol,
    #write ul {
        font-size: 1.25rem;
        font-weight: 500;
        padding-left: 2rem;
    }

    /* Code block inside lists */

    #write li .cm-s-inner {
        font-size: 1.05rem;
        font-weight: 500;
        margin-bottom: -0.65rem;
    }

    /* Code block inside list with better margins, but it resizes borders and consider all as first-child :(
    #write li .cm-s-inner>:first-child {
    margin-top: 1.2rem;
    }
    
    #write li .cm-s-inner>:last-child {
    margin-bottom: 1.2rem;
    }
    */

    #write ol > li,
    #write ul > li {
        font-weight: 500;
        margin-bottom: 0;
    }

    #write ul > li ul > li {
        list-style-type: circle;
        background-color: transparent;
        font-weight: 500;
    }

    #write ul > li ul > li ul > li {
        list-style-type: square;
        font-weight: 500;
    }

    #write ol > li ol > li {
        list-style-type: lower-roman;
    }

    #write ol > li ol > li ol > li {
        list-style-type: lower-latin;
    }

    #write ol > li > *,
    #write ul > li > * {
        font-weight: 500;
    }

    #write ol > li > *:not(ol):not(ul),
    #write ul > li > *:not(ol):not(ul) {
        font-weight: 500;
        padding-left: 0.25rem;
    }

    #write ul {
        font-weight: 500;
        list-style-type: disc;
    }

    ul:first-child,
    ol:first-child {
        font-weight: 500;
        margin-top: 0;
    }

    ul:last-child,
    ol:last-child {
        font-weight: 500;
        margin-top: 0;
    }

    sup.md-footnote {
        background-color: rgba(56, 139, 253, 0.1);
        color: #58a6ff;
        font-weight: 700;
        font-size: 75%;
        font-style: normal;
    }

    sup.md-footnote a {
        font-style: normal;
    }

    sup.md-footnote:hover {
        background-color: rgba(56, 139, 253, 0.15);
    }

    sup.md-footnote .md-meta {
        color: #58a6ff;
    }

    .md-def-footnote .md-def-name:before,
    .md-def-footnote .md-def-name:after {
        content: '';
    }

    .md-def-footnote .md-def-name {
        padding: 2px;
        padding-left: 4px;
        padding-right: 4px;
        background-color: rgba(56, 139, 253, 0.1);
        color: #58a6ff;
        border-radius: 4px;
        cursor: pointer;
    }

    .footnotes {
        opacity: 1;
    }

    .md-def-footnote .md-def-content {
        font-size: 15px;
    }

    a.reversefootnote {
        color: #f9826c;
        font-weight: bold;
        font-size: 13px;
    }

    mark {
        background-color: #2ea44f;
        border-radius: 6px;
        color: white;
        line-height: 1.5;
        padding: 5px 10px;
        white-space: nowrap;
    }

    .cm-s-typora-default {
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 500;
        font-size: 13px;
        color: var(--text-color);
    }

    .cm-s-typora-default .cm-header,
    .cm-s-typora-default .cm-property {
        color: var(--text-color);
    }

    .CodeMirror.cm-s-typora-default div.CodeMirror-cursor {
        border-left: 3px solid #b8bfc6;
    }

    .cm-s-typora-default .cm-comment {
        color: #8b949e;
    }

    .cm-s-typora-default .cm-string {
        color: #a5d6ff;
    }

    .cm-s-typora-default .cm-atom,
    .cm-s-typora-default .cm-number {
        color: #8b949e;
        font-style: italic;
    }

    .cm-s-typora-default .cm-link,
    .cm-s-typora-default .cm-tag {
        color: rgb(165, 214, 255);
    }

    .cm-s-typora-default .cm-string {
        color: #f0b752;
    }

    .cm-s-typora-default pre.cm-s-inner {
        background-color: var(--item-hover-bg-color) !important;
        border: 1px solid var(--item-hover-bg-color);
        color: var(--text-color);
        font-size: 0.9rem;
    }

    .cm-s-typora-default .cm-atom {
        color: #8b949e;
    }

    .CodeMirror-activeline .cm-atom {
        color: var(--text-color) !important;
    }

    .cm-s-typora-default .CodeMirror-activeline-background {
        background: #484f58;
    }

    .cm-s-typora-default .cm-comment,
    .cm-s-typora-default .cm-code {
        color: #8aa1e1;
        font-size: 0.9rem !important;
    }

    /* Mega menu */

    .megamenu-content,
    .megamenu-opened header {
        background: var(--bg-color1);
    }

    .megamenu-content {
        display: block;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s;
    }

    .megamenu-menu-list {
        background-color: var(--item-hover-bg-color) !important;
    }

    .megamenu-opened .megamenu-content {
        visibility: visible;
        opacity: 1;
        animation: none;
        background-color: inherit;
    }

    /* Mega menu sidebar */

    .megamenu-menu {
        background-color: var(--item-hover-bg-color);
    }

    /* Return button in mega menu */

    #megamenu-menu-sidebar .menu-style-btn {
        border: 0px;
    }

    /* Remove divider in mega menu */

    .megamenu-menu-header {
    }

    /* Return button color in mega menu */

    .megamenu-menu-header #megamenu-menu-header-title,
    .megamenu-menu-header #megamenu-menu-header-title:before {
        color: var(--text-color);
    }

    .megamenu-menu-list li a:hover,
    .megamenu-menu-list li a.active {
        background-color: var(--bg-color);
    }

    /* Return button hover in mega menu */

    .megamenu-menu-header:hover {
    }

    /* Return button hover in mega menu */

    .megamenu-menu-header:hover #megamenu-menu-header-title {
    }

    /* Long button in mega menu */

    .long-btn {
        border: 0px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
        margin-bottom: 10px;
        margin-left: 10px;
        background-color: var(--item-hover-bg-color);
    }

    .long-btn:hover {
        background-color: var(--item-hover-bg-color);
        border-color: 1px solid #8b949e;
        color: var(--text-color) !important;
    }


    #recent-file-panel-action-btn {
        background-color: var(--item-hover-bg-color);
        border: 0px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);
        margin-bottom: 10px;
        margin-left: 10px;
    }

    /* Mermaid Diagrams */

    .titleText,
    .pieTitleText {
        fill: var(--mermaid-contrast-color);
        font-size: 2rem;
        font-family: system-ui,
        -apple-system, BlinkMacSystemFont,
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        Arial, sans-serif;
        font-weight: 300;
    }

    /* Node text */

    .grid .tick text,
    .taskText,
    text.actor,
    .node .label,
    .taskTextOutsideRight,
    .taskTextOutsideLeft,
    .labelText,
    .loopText,
    g.classGroup text {
        color: var(--text-color);
        fill: var(--text-color);
        stroke: black;
        stroke-width: 0.05px;

        .title {
            font-weight: 600;
        }
    }

    /* Node color */

    .actor,
    .task,
    .node rect,
    .node circle,
    .node ellipse,
    .node polygon,
    g.classGroup rect,
    .labelBox {
        fill: var(--mermaid-node-color);
        stroke: var(--mermaid-node-border);
        color: var(--text-color);
    }

    /* Node Labels (Notes & On path) */

    .edgeLabel foreignObject {
        color: black;
        background-color: var(--primary-color);
        stroke: var(--primary-btn-border-color);
        stroke-width: 1px;
        height: 20px;
        text-align: center;
    }

    .note {
        fill: var(--primary-color);
        stroke: var(--primary-btn-border-color);
    }

    .noteText {
        color: black;
    }

    .noteText > tspan {
        fill: #333 !important;
        color: #333 !important;
    }

    .taskText {
        fill: white !important;
    }

    /* Class diagram specific */

    g.classGroup line {
        stroke: var(--text-color);
    }

    .classLabel .box {
        stroke: none;
        stroke-width: 0;
        fill: var(--primary-color);
        opacity: 1;
    }

    svg[id^="mermaidChart"] .composition,
    svg[id^="mermaidChart"] .aggregation,
    svg[id^="mermaidChart"] .dependency,
    svg[id^="mermaidChart"] .relation {
        stroke: var(--text-color);
    }

    .classLabel .label {
        fill: black;
    }

    #extensionStart,
    #extensionEnd,
    #compositionStart,
    #compositionEnd,
    #aggregationStart,
    #aggregationEnd,
    #dependencyStart,
    #dependencyEnd {
        fill: var(--text-color);
        stroke: var(--text-color);
    }

    /* Gantt Specific */

    svg[id^="mermaidChart"] .today {
        stroke: var(--mermaid-contrast-color);
    }

    /* Pie Chart Specific */

    svg[id^="mermaidChart"] g path {
        stroke: var(--text-color);
    }

    text.slice {
        fill: var(--text-color);
    }

    .legend text {
        fill: var(--text-color);
    }

    .doneCritText0,
    .doneCritText1,
    .doneCritText2,
    .doneCritText3 {
        fill: var(--text-color) !important;
        stroke: var(--text-color) !important;
    }

    /* End mermaid */

    /* Tip when hover on a button */

    #ty-tooltip {
        background-color: black;
        color: white;
    }

    /* Header in setting */

    .window-header {
    }

    /* Sidebar in setting */

    .sidebar {
        background-color: var(--item-hover-bg-color) !important;
    }

    .list-group-content {
        margin-left: 10px !important;
    }

    /* Sidebar button in setting menu */

    .nav-group-item {
        color: var(--text-color) !important;
        border-top-left-radius: 6px !important;
        border-bottom-left-radius: 6px !important;
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
    }

    /* Sidebar button hover in setting menu */

    .nav-group-item:hover,
    .nav-group-item:active,
    .nav-group-item.active {
        background-color: #0d1117 !important;
        color: var(--text-color) !important;
    }

    /* The indent example in setting.editor */

    div.pane > div:nth-child(4) > div:nth-child(2) .label-input-group td:last-child div {
        border: 1px solid #30363d !important;
        border-radius: 6px;
        background-color: var(--color-border-secondary);
        margin: 10px !important;
    }

    /* Button in setting menu */

    .ty-preferences button.btn-default {
        border: 1px solid #30363d;
        background-color: var(--color-border-secondary);
        border-radius: 6px;
    }

    /* Button hover in setting menu */

    .ty-preferences .btn-default:not([disabled]):hover {
        border-color: #8b949e !important;
        background-color: var(--color-border-secondary) !important;
    }

    /* Return button in setting menu */

    .window-header button:hover {
        color: var(--text-color) !important;
    }

    /* Search input in setting menu */

    .search-input {
        border: 1px solid #30363d;
        border-top-left-radius: 6px !important;
        border-bottom-left-radius: 6px !important;
        border-top-right-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
        margin-top: 10px !important;
        margin-bottom: 10px !important;
        margin-left: 10px !important;
    }

    .search-input:hover {
        border: 1px solid #8b949e;
    }

    .search-input:focus {
        border: none !important;
    }

    /* Select item (mostly in setting menu) */

    select {
        border: 1px solid #30363d;
        border-radius: 6px;
        background-color: var(--color-border-secondary) !important;
        padding-top: 5px !important;
        padding-bottom: 5px !important;
    }

    /* Enabled select item hover */

    select:not([disabled]):hover {
        color: var(--text-color);
        opacity: 1;
        border: 1px solid #8b949e;
    }

    /* Disabled select item hover */

    select[disabled]:hover {
        opacity: 0.5;
        border: 1px solid #8b949e;
    }

    /* Radio */

    input[type="radio"] {
        background-color: var(--item-hover-bg-color) !important;
        border: 0px !important;
    }

    input[type="radio"]:before {
        content: "";
        display: inline-block;
        width: 1.1rem;
        height: 1.1rem;
        vertical-align: middle;
        text-align: center;
        border: 1px solid #30363d;
        border-radius: 0.55rem;
        background-color: var(--item-hover-bg-color) !important;
        margin-top: -0.5rem;
        margin-left: -0.1rem;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    /* Radio hover */

    input[type="radio"]:not([disabled]):not(:checked):hover:before {
        content: "\\25CF";
        font-size: 1rem;
        line-height: 1rem;
        color: var(--text-color);
    }

    /* Radio checked */

    input[type="radio"]:checked:before {
        content: "\\25CF";
        font-size: 1rem;
        line-height: 1rem;
        color: var(--text-color);
        background-color: var(--item-hover-bg-color) !important;
    }

    /* Remove up and down button from number type input */

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
    }

    input {
        background-color: var(--item-hover-bg-color) !important;
        border: 0px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }

    /* Checkbox */

    input[type="checkbox"]:before {
        content: "";
        display: inline-block;
        width: 1.1rem;
        height: 1.1rem;
        vertical-align: middle;
        text-align: center;
        border: 1px solid #30363d;
        border-radius: 3px;
        background-color: var(--item-hover-bg-color);
        margin-top: -0.5rem;
        margin-left: -0.1rem;
    }

    /* Checkbox hover */

    input[type="checkbox"]:not([disabled]):not(:checked):hover:before {
        content: "\\2713";
        font-size: 0.9rem;
        line-height: 1rem;
        color: var(--text-color);
    }

    /* Checkbox checked */

    input[type="checkbox"]:checked:before {
        content: "\\2713";
        font-size: 0.9rem;
        line-height: 1rem;
        color: var(--text-color);
        margin-top: -0.5rem;
        margin-left: -0.1rem;
    }

    #write input[type="checkbox"]:before,
    #write input[type="checkbox"]:checked:before {
        margin-top: -0.9rem;
    }

    /* Checkbox checked hover*/

    input[type="checkbox"]:checked:hover:before {
        content: "\\2713";
        font-size: 0.9rem;
        line-height: 1rem;
        color: white;
        margin-top: -0.5rem;
        margin-left: -0.1rem;
    }

    /* Using checkboxes in sublists should not get list circles inside inputs */

    .md-task-list-item {
        list-style-type: none !important;
    }

    /* Input number in settings for Win/Linux */

    input:not([type="range"]):not([type="color"]) {
        border: 1px solid #30363d !important;
        border-radius: 3px;
        background-color: var(--item-hover-bg-color);
    }

    .pane-sm input[type="search"] {
        border: 1px solid #30363d !important;
    }

    /* Search in settings */

    #file-library-search-input:hover {
        border: 1px solid #8b949e !important;
    }

    /* Scrollbar */

    ::-webkit-scrollbar-thumb,
    ::-webkit-scrollbar-thumb:active {
        border-radius: 10px;
        background-color: #2F333A;
    }

    /* Remove dashed border on filenames in the sidebar */

    .file-library-node:not(.file-node-root):focus > .file-node-content {
        outline: 0 !important;
    }

    /* Handle long filenames in sidebar */

    file-node-title-name-part {
        white-space: pre-wrap;
    }

    /* Custom syntax highlighting */

    div.cm-s-inner[lang="css"] .cm-qualifier {
        color: #a5d6ff !important;
    }

    div.cm-s-inner[lang="css"] .cm-def {
        color: #ff7b72 !important;
    }

    div.cm-s-inner[lang="css"] .cm-tag {
        color: #7ee787 !important;
    }

    div.cm-s-inner[lang="diff"] .cm-meta {
        color: #d2a8ff !important;
        font-weight: 700;
    }

    div.cm-s-inner[lang="diff"] .cm-negative {
        color: #d2a8ff !important;
        font-weight: 700;
    }

    div.cm-s-inner[lang="dockerfile"] .cm-variable-2 {
        color: #ff7b72 !important;
    }

    div.cm-s-inner[lang="elixir"] .cm-def {
        color: #ff7b72 !important;
    }

    div.cm-s-inner[lang="elixir"] .cm-atom {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="erlang"] .cm-tag {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="fsharp"] .cm-variable {
        color: #ffa657 !important;
    }

    div.cm-s-inner[lang="go"] .cm-atom {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="http"] .cm-atom {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="java"] .cm-def {
        color: #ffa657 !important;
    }

    div.cm-s-inner[lang="javascript"] .cm-def {
        color: #ffa657 !important;
    }

    div.cm-s-inner[lang="less"] .cm-def {
        color: #ff7b72 !important;
    }

    div.cm-s-inner[lang="kotlin"] .cm-def {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="markdown"] .cm-comment.cm-variable-2 {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="perl"] .cm-def {
        color: #ff7b72 !important;
    }

    div.cm-s-inner[lang="perl"] .cm-meta {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="perl"] .cm-variable-2 {
        color: #8b949e !important;
    }

    div.cm-s-inner[lang="php"] .cm-def {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="python"] .cm-property {
        color: #ffa657 !important;
    }

    div.cm-s-inner[lang="rust"] .cm-def {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="rust"] .cm-variable-3 {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="scss"] .cm-def {
        color: #ff7b72 !important;
    }

    div.cm-s-inner[lang="scss"] .cm-variable-2 {
        color: #ffa657 !important;
    }

    div.cm-s-inner[lang="scss"] .cm-tag {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="scss"] .cm-error {
        color: #d2a8ff !important;
    }

    div.cm-s-inner[lang="ruby"] .cm-atom {
        color: #d2a8ff !important;
    }

    li {
        margin-left: 10px;
        margin-right: 10px;
    }

    h3 strong {
        color: #45b97c; /* 将<h3>标签内<strong>标签包裹的文本设置为绿色 */
    }

    hr {
        display: none;
    }

    p {
        color: #eee;
        font-size: 16px;
    }

    overflow-y: auto; /* Enable vertical scrolling */

    ul {
        list-style-type: disc; /* Ensure bullet points are displayed */
        padding-left: 20px;    /* Add indentation */
    }

    ol {
        list-style-type: decimal; /* For ordered lists, use numbers */
        padding-left: 20px;       /* Add indentation */
    }

    li {
        margin: 0.5em 0;  /* Space between list items */
    }
`;
