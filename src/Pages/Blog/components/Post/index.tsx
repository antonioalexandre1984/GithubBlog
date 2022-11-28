import { IPost } from '../..';
import { relativeDataFormatter } from '../../../../utils/formattedDate';
import { PostContainer } from './styles';

interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const dateformat = relativeDataFormatter(post.created_at)

  return (
    <PostContainer
      className='container'
      to={`/post/${post.number}`}>
      <header>
        <strong>{post.title}</strong>
        <span>{dateformat}</span>
      </header>
      <section>
        <p>{post.body}</p>
      </section>
    </PostContainer>
  );
}
