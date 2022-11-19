import {AppBar, Link, Typography} from "@mui/material";

const Header = () => {
  const saladTheoryUrl = 'https://saladtheory.github.io/'

  return (
    <AppBar
      sx={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
      }}
    >
      <Typography
        sx={{
          margin: 'auto'
        }}
        variant='h4'>
        Food Entropy Calculator
      </Typography>
      <Link
        sx={{
          display: 'flex',
          justifyContent: 'center',
          color: 'white'
        }}
        href={saladTheoryUrl}
      >
        Inspired by this post
      </Link>
    </AppBar>
  )
}

export default Header;