import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Create a custom theme with Lora font family
const customTheme = createTheme({
  typography: {
    fontFamily: '"Lora", "Georgia", serif',
    // Customize specific typography variants
    body1: {
      fontFamily: '"Lora", "Georgia", serif',
    },
  },
  components: {
    // Customize specific components
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: '"Lora", "Georgia", serif',
        },
        head: {
          fontFamily: '"Lora", "Georgia", serif',
          fontWeight: 700,
        },
      },
    },
  },
});

const ResponsiveTable = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Planet data
  const planets = [
    {
      sun: 1000,
      moon: 41,
      mars: 315,
      mercury: 1000,
      jupiter: 1000,
      saturn: 1000,
    },
  ];

  // Column headers
  const headers = ["Sun", "Moon", "Mars", "Mercury", "Jupiter", "Saturn"];

  // Common style for custom font (inline styling)
  const loraFontStyle = {
    fontFamily: '"Lora", "Georgia", serif',
  };

  // For desktop: standard table
  if (!isMobile) {
    return (
      <ThemeProvider theme={customTheme}>
        <TableContainer component={Paper}>
          <Table aria-label="planets table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={header} sx={loraFontStyle}>
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {planets.map((planet, index) => (
                <TableRow key={index}>
                  <TableCell sx={loraFontStyle}>{planet.sun}</TableCell>
                  <TableCell sx={loraFontStyle}>{planet.moon}</TableCell>
                  <TableCell sx={loraFontStyle}>{planet.mars}</TableCell>
                  <TableCell sx={loraFontStyle}>{planet.mercury}</TableCell>
                  <TableCell sx={loraFontStyle}>{planet.jupiter}</TableCell>
                  <TableCell sx={loraFontStyle}>{planet.saturn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    );
  }

  // For mobile: stacked cards
  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        {planets.map((planet, planetIndex) => (
          <Card sx={{ mb: 2 }} key={planetIndex}>
            <CardContent>
              {headers.map((header, index) => {
                const key = header.toLowerCase();
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      borderBottom:
                        index < headers.length - 1 ? "1px solid #eee" : "none",
                      py: 1,
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontWeight="medium"
                      sx={loraFontStyle}
                    >
                      {header}
                    </Typography>
                    <Typography variant="body1" sx={loraFontStyle}>
                      {planet[key]}
                    </Typography>
                  </Box>
                );
              })}
            </CardContent>
          </Card>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default ResponsiveTable;
