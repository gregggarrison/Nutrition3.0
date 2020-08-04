import React from 'react'
import './NutritionLabel.css'

const NutritionLabel = () => {

    return (
        <div className="col" id="row1-col2">
            <div id="nutritionfacts">
                <table width="225" cellSpacing="0" cellPadding="0">
                    <tbody>
                        <tr>
                            <td align="center" className="header">Nutrition Facts</td>
                        </tr>
                        <tr id="height-7px">
                            <td bgcolor="#000000"></td>
                        </tr>
                        <tr>
                            <td id="font-size-7pt" >
                                <div className="line">Amount Per Serving: 1 Unit</div>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="label">Calories <div id="lCalories" className="weight">22</div>
                                    </div>
                                    <div style={{ paddingLeft: "6px" }} id="padding-top-1px-float-right" className="weight">Calories from Fat
                                    <div id="lCaloriesFat" className="weight">22</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="dvlabel">% Daily Value<sup>*</sup></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="label">Total Fat <div id="lTotalFat" className="weight">3</div>
                                    </div>
                                    <div id="lTotalFatDV" className="dv">2</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="indent">
                                <div className="line">
                                    <div className="labellight">Saturated Fat <div id="lSaturatedFat"
                                        className="weight">3
                                </div>
                                    </div>
                                    <div id="lSaturatedFatDV" className="dv">2</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="indent">
                                <div className="line">
                                    <div className="labellight"><i>Trans</i> Fat <div id="lTransFat" className="weight">3
                                </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="label">Cholesterol <div id="lCholesterol" className="weight">3</div>
                                    </div>
                                    <div id="lCholesterolDV" className="dv">3</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="label">Sodium <div id="lSodium" className="weight">3</div>
                                    </div>
                                    <div id="lSodiumDV" className="dv">30</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="label">Total Carbohydrates <div id="lCarbs" className="weight">33
                                </div>
                                    </div>
                                    <div id="lCarbsDV" className="dv">22</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="indent">
                                <div className="line">
                                    <div className="labellight">Dietary Fiber <div id="lFiber" className="weight">3</div>
                                    </div>
                                    <div id="lFiberDV" className="dv">3</div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="indent">
                                <div className="line">
                                    <div className="labellight">Sugars <div id="lSugar" className="weight">3</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="label">Protein <div id="lProtein" className="weight">4</div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr id="height-7px">
                            <td bgcolor="#000000"></td>
                        </tr>
                        <tr>
                            <td>
                                <div className="line">
                                    <div className="labellight">* Based on a regular
                                    <a href="https://www.choosemyplate.gov/resources/MyPlatePlan">2000 calorie diet </a>
                                        <br></br>
                                        <i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NutritionLabel