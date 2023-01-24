import { ListItemButtonBaseProps, ListItemTextProps } from '@mui/material';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

export interface ListItemLinkProps extends ListItemButtonBaseProps {
    label: ListItemTextProps['primary'];
    to: RouterLinkProps['to'];
}
