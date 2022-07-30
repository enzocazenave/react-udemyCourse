import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { TurnedInNot } from '@mui/icons-material';
import { useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title, body, id, date, imageUrls = [] }) => {

    const dispatch = useDispatch();
    const { active } = useSelector(state => state.journal);
    
    const selected = active?.id === id;

    const newTitle = useMemo(() => {
        return title.length > 17
            ? title.substring(0, 17) + '...'
            : title;
    }, [title])

    const newBody = useMemo(() => {
        return body.length > 50
            ? body.substring(0,50) + '...'
            : body;
    }, [body])

    const onNoteClick = () => {
        dispatch(setActiveNote({
            id,
            title, 
            body,
            date,
            imageUrls
        }))
    }

    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={ onNoteClick }
                selected={ selected }
            >
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>

                <Grid 
                    container
                >
                    <ListItemText sx={{ width: "100%" }} primary={ newTitle } />
                    <ListItemText secondary={ newBody } />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}

