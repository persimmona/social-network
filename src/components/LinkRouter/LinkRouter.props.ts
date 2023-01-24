import { LinkProps } from '@mui/material';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

export interface LinkRouterProps extends LinkProps {
    to: RouterLinkProps['to'];
}
