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

interface IButtonState {}

interface IListProps {
  data?: string[]
  handleShowList?: (params: (null)) => void
}

interface IListState {}
