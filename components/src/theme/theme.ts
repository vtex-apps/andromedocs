import statusTag from './components/statusTag'

export const theme = {
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
  },
  styles: {
    h1: {
      fontSize: 32,
      fontFamily: 'body',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2,
    },
    h2: {
      fontSize: 4,
      fontFamily: 'body',
      my: 1,
    },
    h3: {
      fontSize: 3,
      fontFamily: 'body',
      my: 1,
    },
    ul: {
      fontSize: 2,
      fontFamily: 'body',
      my: 3,
    },
    ol: {
      fontSize: 2,
      fontFamily: 'body',
      my: 3,
    },
    p: {
      fontSize: 2,
      fontFamily: 'body',
    }
  },
  colors: {
    text: '#4A4A4A',
    background: '#F8F7FC',
    muted: ['#717786', '#A1A8B3', '#CCCED8', '#E7E9EE', '#F8F7FC', '#FFFFFF'],
    focus: '#FFC4DD',
    primary: {
      base: '#E31C58',
      hover: '#C81E51',
      active: '#D71D55',
      washed: '#FFF3F6',
      contrast: '#FFFFFF',
    },
    secondary: {
      base: '#142032',
      hover: '#000711',
      active: '#0C1522',
      washed: '#F5F9FF',
      contrast: '#FFFFFF',
    },
    success: {
      base: '#79A479',
      hover: '#719471',
      active: '#6D9C6D',
      washed: '#E6F2E6',
      contrast: '#FFFFFF',
    },
    warning: {
      base: '#FFB100',
      hover: '#E6A30A',
      active: '#EFA906',
      washed: '#FFF2D4',
      contrast: '#FFFFFF',
    },
    danger: {
      base: '#DC5A41',
      hover: '#CE4A30',
      active: '#D65138',
      washed: '#FDEFEF',
      contrast: '#FFFFFF',
    },
    bubblegum: {
      base: '#FFC4DD',
      hover: '#FCABCD',
      active: '#FEB9D6',
      washed: '#FFE0EF',
      contrast: '#FFFFFF',
    },
  },
  guidelines: {
    list: {
      fontFamily: 'sans serif',
      color: 'muted.0',
      lineHeight: 'action',
      marginLeft: 3,
      fontSize: 2,
      paddingTop: 3,
    },
    divider: {
      borderColor: 'muted.3',
      marginY: 4,
    },
    titles: {
      textTransform: 'uppercase',
      marginLeft: 3,
      fontSize: 3,
      lineHeight: 'action',
      color: 'text',
    },
  },
  statusTag,
  fontSizes: [12, 14, 16, 20, 24],
  fontWeights: {
    regular: 400,
    medium: 500,
  },
  lineHeights: {
    small: 1.125,
    body: 1.25,
    highlight: 1.25,
    action: 1.5,
    subtitle: 1.5,
    headline: 1.5,
  },
  space: [0, 2, 4, 8, 16, 24, 32, 64, 96, 128, 160, 256],
  borderWidths: [0, 1, 2, 4, 6],
  borderRadius: [0, 1, 2, 4, 6],
}
