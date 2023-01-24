import { ListItemButton, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ListItemLinkProps } from './ListItemLink.props';

export const ListItemLink = ({ to, label, ...props }: ListItemLinkProps) => {
    return (
        <ListItemButton component={RouterLink} to={to} {...props}>
            <ListItemText primary={label} />
        </ListItemButton>
    );
};
