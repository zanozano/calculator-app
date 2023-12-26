import './css/style.css'
import { Box, Button, ThemeProvider, Typography, styled } from '@mui/material';
import { buttons } from './utils/buttons';
import { useMode } from './context/ModeProvider';
import { SwitchTheme } from './components/SwitchTheme';
import { useEffect } from 'react';
import { useMathOperations } from './hooks/useMathOperations';

const CustomButton = styled(Button)({
    borderRadius: '10rem',
    fontSize: '1.6rem',
    textTransform: 'initial',
})

export const Calculator = () => {

    const { value, number, reset } = useMathOperations()

    const { theme } = useMode();

    const handleCalculate = ({ digit, value }) => {
        if (!isNaN(digit)) {
            number(digit)
        }
        if (value == 'reset') {
            reset()
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = theme.palette.background.main;
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>

            <Box
                sx={{
                    position: 'absolute',
                    right: 14,
                    top: 10,
                    zIndex: 10,
                }}>
                <SwitchTheme />
            </Box>

            <Box sx={{
                alignItems: 'center',
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                padding: '0 0.4rem',
            }}>

                <Box sx={{ backgroundColor: theme.palette.surface.main }} className='main-container'>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'row-reverse', height: 86 }}>
                        <Typography sx={{ fontSize: 64 }}>
                            {value}
                        </Typography>
                    </Box>

                    <Box className='btn-block'>
                        {buttons.map((button, index) => (
                            <CustomButton
                                disableElevation
                                className={button.value}
                                color={button.color}
                                key={index}
                                onClick={() => handleCalculate(button)}
                                variant="contained"
                            >
                                {button.digit}
                            </CustomButton>
                        ))}
                    </Box>
                </Box>

            </Box>
        </ThemeProvider>
    )
}
