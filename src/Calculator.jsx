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

    const {
        dot,
        number,
        add,
        subtract,
        multiply,
        divide,
        modulo,
        calculate,
        value,
        reset,
        showResult,
    } = useMathOperations()

    const { theme } = useMode();

    const handleCalculate = ({ digit, value }) => {
        if (!isNaN(digit)) {
            number(digit);
            return;
        }

        switch (value) {
            case 'reset':
                reset();
                break;
            case 'add':
                add(digit);
                break;
            case 'dot':
                dot(digit);
                break;
            case 'subtract':
                subtract(digit);
                break;
            case 'multiply':
                multiply(digit);
                break;
            case 'divide':
                divide(digit);
                break;
            case 'modulo':
                modulo(digit);
                break;
            case 'result':
                showResult();
                break;
            default:
                console.error('Unrecognized operation:', value);
        }
    };

    const formatValue = (value) => {
        if (value.length > 8) {
            const exponent = value.length - 1;
            return `${value[0]}.${value.substring(1, 2)}e${exponent}`;
        }
        return value;
    };

    useEffect(() => {
        document.body.style.backgroundColor = theme.palette.background.main;
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>

            <Box sx={{
                background: (theme) => theme.palette.background.main,
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '0.8rem',
            }}>
                <Box
                    sx={{
                        overflow: 'visible',
                        backgroundColor: theme.palette.surface.main,
                        border: `4px solid ${theme.palette.tertiary.main
                            }`
                    }} className='main-container'>
                    <Box
                        sx={{
                            alignSelf: 'flex-end',
                            zIndex: 10,
                        }}>
                        <SwitchTheme />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'column', height: 140 }}>
                        <Box sx={{ display: 'flex', height: 36 }}>
                            <Typography variant='h3'>
                                {calculate}
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', height: 86 }}>
                            <Typography variant='h2'>
                                {formatValue(value)}
                            </Typography>
                        </Box>
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
