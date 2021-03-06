/**
 * Basic
 */

interface IPageProps {
  getInitialProps(): object;
}

/**
 * Home Page
 */

interface IHomeProps extends IPageProps {
  teams: any[] | ITeam[];
}

/**
 * Team
 */

interface ITeam {
  _id: string;
  name: string;
}

/**
 * Search
 */

interface ISearchProps {
  placeholder?: string
  handleShowList?: (params: (string | number)) => void
}

interface ISearchState {
  searchCriteria?: string | number
}

interface IButtonProps {
  type?: string;
  size?: string;
  disabled?: boolean
  children?: any
}

interface IButtonState { }

interface IListProps {
  data?: string[]
  handleShowList?: (params: (null)) => void
}

interface IListState { }

interface IProgressBarProps {
  size?: number,
  wins?: number,
  draw?: number,
  lose?: number,
  totalGame?: number,
  first?: boolean,
  last?: boolean,
  percents?: string
}

interface IProgressBarState { }

interface ITeamComponentProps {
  teamName?: string,
  teamAvatar?: string,
}

interface ITeamComponentState { }
