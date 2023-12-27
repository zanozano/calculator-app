import React, { createContext, useContext, useState } from 'react';
import { createTheme } from '@mui/material/styles';

const ModeContext = createContext();

export const useMode = () => {
    return useContext(ModeContext);
};

export const ModeProvider = ({ children }) => {
    const [isLightMode, setIsLightMode] = useState(true);

    const toggleMode = () => {
        setIsLightMode((prevMode) => !prevMode);
    };

    const theme = createTheme({
        typography: {
            fontFamily: 'Roboto, sans-serif',
            h2: {
                fontSize: 64,
                fontWeight: 300,
            },
            h3: {
                fontSize: 26,
                fontWeight: 200,
            },
        },
        palette: {
            mode: isLightMode ? "light" : "dark",
            primary: {
                main: '#FEA009',
            },
            secondary: {
                main: isLightMode ? '#323232' : '#c8c8c8',
            },
            tertiary: {
                main: isLightMode ? '#a5a5a5' : '#555555',
            },
            surface: {
                main: isLightMode ? '#000000' : '#ffffff',
            },
            background: {
                main: isLightMode ? '#ffffff' : '#000000',
            },
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: isLightMode ? '#ffffff' : '#000000',
                    }
                }
            }
        }
    });

    const contextValue = {
        isLightMode,
        toggleMode,
        theme,
    };

    return (
        <ModeContext.Provider value={contextValue}>
            {children}
        </ModeContext.Provider>
    );
};
