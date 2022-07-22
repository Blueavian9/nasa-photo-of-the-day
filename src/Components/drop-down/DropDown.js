import React from 'react';
import { DropdownItem, DropdownMenu } from 'reactstrap';
import './DropDown.css'

function DropDown(props) {
    const { date, changeMain } = props;

    let dates = [];

    function dropDownDates() {
        for (let index = 1; index <= 30; index++) {
            let valueDate = index > 9 ? `05-${index}-2022` : `05-0${index}-2022`;
            dates.push(<DropdownItem key={index} value={valueDate}> 
                {valueDate}
            </DropdownItem>);
        }
        return dates;
    }

    function test(event) {
        console.log('nav check!: ', event.target.value);
    }

    return (
        <DropdownMenu end onClick={changeMain}>
            {dropDownDates()}
        </DropdownMenu>
    )
}

export default DropDown

/*
<div>
            <form>
                <select className='the-button' id='menu' onChange={changeMain}>
                    <option value="" >--Please choose a date📅--</option>
                    {dropDownDates()}
                </select>
            </form>
        </div>

        function dropDownDates() {
        for (let index = 1; index <= 30; index++) {
            let valueDate = index > 9 ? `05-${index}-2022` : `05-0${index}-2022`;
            dates.push(<option key={index} value={valueDate}>
                {valueDate}
            </option>);
        }
        return dates;
    }
*/