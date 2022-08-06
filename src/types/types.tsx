export type LaunchType = {
  launch: {
    id: string;
    links: {
      article_link: string;
      video_link: string;
    };
    rocket: {
      rocket_name: string;
      rocket: {
        company: string;
        cost_per_launch: number;
        country: string;
        first_flight: string;
        success_rate_pct: number;
      };
    };
    launch_site: {
      site_name: string;
    };
    launch_success: boolean;
    launch_date_local: string;
    mission_name: string;
  };
};

export type LaunchesType = {
  id: string;
  links: {
    article_link: string;
    video_link: string;
  };
  rocket: {
    rocket_name: string;
    rocket: {
      company: string;
      cost_per_launch: number;
      country: string;
      first_flight: string;
      success_rate_pct: number;
    };
  };
  launch_site: {
    site_name: string;
  };
  launch_success: boolean;
  launch_date_local: string;
  mission_name: string;
};
