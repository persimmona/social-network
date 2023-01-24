import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LinkRouterProps } from './LinkRouter.props';

export const LinkRouter = (props: LinkRouterProps) => {
    return <Link component={RouterLink} {...props} />;
};
