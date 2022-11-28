import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { IPost } from '../Blog';
import { PostContent } from './components/PostContent';
import { PostHeader } from './components/PostHeader';
import { PostContainer } from './styles';

const userName = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function PostPage() {
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  const getPostDetails = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/repos/${userName}/${repoName}/issues/${id}`);
      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPostDetails();
  }, []);

  return (
    <>
      <PostContainer >
        <PostHeader isLoading={isLoading} postData={postData} />
        {!isLoading && <PostContent content={postData.body} />}
      </PostContainer>
    </>
  );
}
