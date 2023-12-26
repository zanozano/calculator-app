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
                alignItems: 'flex-end',
                display: 'flex',
                minHeight: '100vh',
                justifyContent: 'center',
                padding: '0.8rem',
            }}>

                <Box sx={{ backgroundColor: theme.palette.surface.main }} className='main-container'>
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
