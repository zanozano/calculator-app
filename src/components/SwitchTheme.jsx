import { Button, Typography } from '@mui/material';
import React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useMode } from '../context/ModeProvider';

export const SwitchTheme = () => {
    const { isLightMode, toggleMode, theme } = useMode();

    return (
        <Button
            onClick={toggleMode}
            variant='contained'
            disableElevation
            sx={{
                alignItems: 'center',
                borderRadius: 10,
                display: 'flex',
                fontSize: 16,
                fontWeight: 600,
                gap: 2,
                padding: '0.8rem 1.4rem',

            }}>
            theme
            {isLightMode ? (
                <LightModeIcon />
            ) : (
                <DarkModeIcon />
            )}

        </Button>
    );
};
