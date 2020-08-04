
import React from 'react'

function BMRCalc(props) {

    return (
        <div>
            <div className="omni-calculator" data-calculator="health/bmr" data-width="300" data-config='{"height":{"unitDefault":"ftinch"},"weight":{"unitDefault":"lb"},"women_lbm":{"unitDefault":"lb"},"men_lbm":{"unitDefault":"lb"}}' data-currency="USD" data-show-row-controls="false" data-version="3" data-t="1596484491489">
                <div className="omni-calculator-header">BMR Calculator (Basal Metabolic Rate, Mifflin St Jeor Equation)</div>
                <div className="omni-calculator-footer">
                    <a href="https://www.omnicalculator.com/health/bmr" target="_blank"><img alt="Omni" class="omni-calculator-logo" src="https://cdn.omnicalculator.com/embed/omni-calculator-logo-long.svg" /></a>
                </div>
            </div>

        </div>

    )
}

export default BMRCalc 
