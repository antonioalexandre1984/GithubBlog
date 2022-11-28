import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from '../../../../components/ExternalLink';
import { IPost } from '../../../Blog';
import { Profile } from '../../../Blog/components/Profile';
import { PostHeaderContainer } from './styles';
import { relativeDataFormatter } from "../../../../utils/formattedDate";
import { Spinner } from '../../../../components/Spinner';

interface IPostHeaderProps {
  postData: IPost;
  isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: IPostHeaderProps) {
  const navigate = useNavigate();
  function goBack() {
    navigate(-1);
  }
  const formattedDate = relativeDataFormatter(postData.created_at);
  return (
    <PostHeaderContainer className='container'>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header>
            <ExternalLink
              as="button"
              onClick={goBack}
              icon={<FontAwesomeIcon icon={faChevronLeft} />}
              text="Voltar"
              variant="iconLeft"
            />
            <ExternalLink
              text="Ver no Github"
              href={postData.html_url}
              target="_blank"
            />
          </header>
          <h1>{postData.title}</h1>
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faComment} />
              {postData.comments} seguidores</li>
          </ul>
        </>
      )}
    </PostHeaderContainer>
  );
}

