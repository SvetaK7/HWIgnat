import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'; // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: string
} // need to fix any
export type FilterType = 'all' | AffairPriorityType
type AffairsPropsType = Array<AffairType>
// constants
const defaultAffairs: AffairsPropsType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairsPropsType, filter: FilterType): AffairsPropsType => { // need to fix any
    if (filter === 'all') {
        return affairs;
    }
    return affairs.filter((el) => el.priority === filter);


}
export const deleteAffair = (affairs: AffairsPropsType, _id: number): AffairsPropsType => { // need to fix any
    return affairs.filter((el) => el._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsPropsType>(defaultAffairs) // need to fix any

    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
