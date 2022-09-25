import { Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

type Query = 'up' | 'down' | 'between' | 'only';
type Key = Breakpoint | number;
type Start = Breakpoint | number;
type End = Breakpoint | number;

// ----------------------------------------------------------------------

/**
 *
 * @docs  https://mui.com/material-ui/react-use-media-query/
 */
export default function useResponsive(query: Query, start?: Start, end?: End) {
  //  HOOKS
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Key));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Key));
  const mediaBetween = useMediaQuery(
    theme.breakpoints.between(start as Start, end as End)
  );
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  // RETURN
  switch (query) {
    case 'up':
      return mediaUp;
    case 'down':
      return mediaDown;
    case 'between':
      return mediaBetween;
    case 'only':
      return mediaOnly;
    default:
      throw new Error('No query provided');
  }
}
