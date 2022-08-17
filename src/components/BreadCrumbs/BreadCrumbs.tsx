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
      links.map((item, i) =>
        i === links.length - 1 ? (
          <Typography variant="body2" key={item.label} sx={{ fontSize: 12 }} color="text.primary">
            {item.label}
          </Typography>
        ) : (
          <Link to={item.link}>
            <Typography variant="body2" sx={{ color: (theme) => theme.palette.primary.main, fontSize: 12 }}>
              {item.label}
            </Typography>
          </Link>
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
