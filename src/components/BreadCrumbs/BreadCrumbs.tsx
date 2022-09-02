import * as React from 'react';
import MUIBreadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';
import Link from '../Link/Link';

interface BreadCrumbLink {
  label: string;
  link: string;
}

type Props = {
  links: BreadCrumbLink[];
};

const Breadcrumbs: React.FC<Props> = ({ links }) => {
  const breadcrumbs = React.useMemo(
    () =>
      links.map(({ label, link }, i) =>
        i === links.length - 1 ? (
          <Typography key={label} sx={{ fontSize: 11 }} color="text.primary">
            {label}
          </Typography>
        ) : (
          <Link to={link}>{label}</Link>
        )
      ),
    [links]
  );

  return (
    <MUIBreadcrumbs separator={<Icon icon="ic:baseline-chevron-right" fontSize="medium" />} aria-label="breadcrumb">
      {breadcrumbs}
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
