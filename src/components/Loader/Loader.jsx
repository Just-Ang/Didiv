import { LoaderCont } from './Loader.styled';
import { Default } from 'react-spinners-css';

export const Loader = () => {
  return <LoaderCont>{<Default color={'#6d433da8'} />}</LoaderCont>;
};