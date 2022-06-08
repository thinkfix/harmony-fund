/** @jsx jsx */
import { jsx, Image, Text } from 'theme-ui';
import { Link } from 'components/link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={styles.logo}
      {...rest}
    >
      <Image src={src} alt="Zlagoda logo" />
      <Text sx={styles.logo_text} >Злагода та добро</Text>
    </Link>
  );
}

const styles = {
  logo: {
    variant: 'links.logo',
    display: 'flex',
    cursor: 'pointer',
    mr: 15,
    alignItems: 'center',
    textDecoration: 'none'
  },
  logo_text: {
    ml: 3,
    color: '#fff',
    textTransform: 'uppercase',
    letterSpacing: 2
  }
};