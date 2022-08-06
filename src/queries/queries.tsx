export const SpacexQuery = `
{
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name
    }
    rocket {
      rocket_name
    }
  }
}
`;

export const LaunchQuery = `
query ($id: ID!) {
  launch(id: $id) {
    id
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
      rocket {
        company
        cost_per_launch
        country
        first_flight
        success_rate_pct
      }
    }
    launch_site {
      site_name
    }
    launch_success
    launch_date_local
    mission_name
  }
}`;
