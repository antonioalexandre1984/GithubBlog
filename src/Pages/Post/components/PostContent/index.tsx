import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/hljs/dracula';
import { PostContentContainer } from './styles';

interface IPostContentProps {
  content: string;
}

export function PostContent({ content }: IPostContentProps) {


  return (
    <PostContentContainer className='container'>
      <ReactMarkdown
        children={content}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dracula as any}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </PostContentContainer >
  );
}
