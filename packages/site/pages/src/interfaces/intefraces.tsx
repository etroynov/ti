export interface ISearchProps {
	placeholder?: string
	handleShowList?: (params: (string | number)) => void
}
export interface ISearchState {
	searchCriteria?: string | number
}
export interface IButtonProps {
	primary?: boolean
	secondary?: boolean
	danger?: boolean
	link?: boolean
	small?: boolean
	large?: boolean
	full?: boolean
	disabled?: boolean
	children?: any
}
export interface IButtonState {
}
export interface IListProps {
	data?: string[]
	handleShowList?: (params: (null)) => void
}
export interface IListState {
}