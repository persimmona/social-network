import { Box, List } from '@mui/material';
import { ListItemLink } from '../components';

export const Menu = () => {
    return (
        <Box
            sx={{
                bgcolor: 'background.paper',
                mt: 1,
            }}
            component='nav'
            aria-label='menu'
        >
            <List>
                <ListItemLink to='/profile' label='Profile' />
                <ListItemLink to='/messages' label='Messages' />
                <ListItemLink to='' label='News' />
                <ListItemLink to='' label='Music' />
                <ListItemLink to='' label='Settings' />
            </List>
        </Box>
    );
};
