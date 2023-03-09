import React from 'react'
import "./Main.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import im from "../../images/team-4.jpg"
import Chart from "react-apexcharts";
import { PieChart, Pie } from 'recharts';
import mastercard from "../../images/master.png"
import qiwi from "../../images/qiwi.png"
import webm from "../../images/webmoney.jpg"
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import SouthWestOutlinedIcon from '@mui/icons-material/SouthWestOutlined';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function Main() {

  const data1 = {
    // labels: ['spent', 'Referral'],
    datasets: [{
      labels: 'Poll',
      data: [3, 6, 3],
      backgroundColor: ['rebeccapurple', 'aqua', 'lightgray'],
      borderWidth: '0'
    }]
  }

  const option1 = {
    plugins: {
      datalabels:{
        display:true,
      },
      doughnutlabel: {
        labels: [
          {
            text: '550',
            font: {
              size: 20
            }
          },
          {
            text: 'total',
          }
        ]
      }
    }
}
  return (
    <>
      <div className='mainall'>

        <div className='navi'>

          <div className='balance'>

            <div className='topi'>
              <div className='head'>
                <h5>Balance</h5>
              </div>

              <div className='icun'>
                <NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>
                <img src={im} />
              </div>
            </div>
            <div className='brdr2'></div>

            <div className='data'>
              <div className='dbo'>
                Daily balance overview
              </div>

              <div>
                <span className='blue1'></span>spent  <span className='blue2'></span> Referral
                <select name="cars" id="cars">
                  <option value="14d">14 days</option>
                  <option value="1m">1 month</option>
                  <option value="6m">6 month</option>
                  <option value="1y">1 year</option>
                </select>

              </div>
            </div>
            <div>
              <div>

                <Chart
                  type="bar"
                  width={550}
                  height={180}
                  series={[
                    {
                      data: [1000, 6787, 3245, 9876, 2324, 5123, 2435, 1212, 2121, 1414, 2525, 1212, 3636, 4596],
                    },
                  ]}
                  options={{
                    colors: ["rebeccapurple"],
                    theme: { mode: "light" },
                    xaxis: {
                      categories: [
                        "1Mar",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "",
                        "14Mar",
                      ],

                    },

                    yaxis: {
                      labels: {
                        formatter: (val) => {
                          return `${val}`;
                        },
                        style: { fontSize: "10", colors: ["blue"] },

                      },
                    },


                  }}
                ></Chart>
              </div>    {/* graph */}
            </div>

          </div>

          <div className='balancestatistic'>
            <div className='bstatic'>
              Balance statistic
            </div>
            <div className='donut'>
              <Doughnut
                data={data1}
                option={option1}>

              </Doughnut>
            </div>
            
            <div>
                <span className='bl1'></span>spent  <span className='bl2'></span> Referral
              </div>
          </div>
        </div>


        {/* cards */}

        <div className='pm'>
          Payment method

        </div>
        <div className='crds'>
          <div>
            <div class="card">
              <div class="card-body">
                <div className='bodyhead'>

                  <h5 class="card-title">PayPal</h5>
                  <div>
                    <span className='blue4'></span>  <span className='hell'>1-5%</span>
                  </div>
                </div>

              </div>
              <div className='helloicon'>
                <i class="fa-brands fa-paypal hi"></i>
                <span className='blue5'></span>
              </div>

            </div>
          </div>



          <div>
            <div class="card">
              <div class="card-body">
                <div className='bodyhead'>

                  <h5 class="card-title">Mastercard</h5>
                  <div>
                    <span className='blue4'></span>  <span className='hell'>1-5%</span>
                  </div>
                </div>

              </div>
              <div className='helloicon'>
                <img src={mastercard} className="hi2"></img>
              {/* <i class="fa-brands fa-cc-mastercard hi2"></i> */}
                <span className='blue5'></span>
              </div>

            </div>
          </div>



          <div>
            <div class="card">
              <div class="card-body">
                <div className='bodyhead'>

                  <h5 class="card-title">Webmoney</h5>
                  <div>
                    <span className='blue4'></span>  <span className='hell'>1-5%</span>
                  </div>
                </div>

              </div>
              <div className='helloicon'>
                <img src={webm} className="hi6"></img>
              {/* <i class="fa-sharp fa-regular fa-earth-europe hi"></i> */}
                <span className='blue5'></span>
              </div>

            </div>
          </div>



          <div>
            <div class="card">
              <div class="card-body">
                <div className='bodyhead'>

                  <h5 class="card-title">Qiwi</h5>
                  <div>
                    <span className='blue4'></span>  <span className='hell'>1-5%</span>
                  </div>
                </div>

              </div>
              <div className='helloicon'>
                <img src={qiwi} className="hi4"></img>
              {/* <i class="fa-brands fa-amazon-pay hi4"></i> */}
                <span className='blue5'></span>
              </div>

            </div>
          </div>



          <div>
            <div class="card">
              <div class="card-body">
                <div className='bodyhead'>

                  <h5 class="card-title">Transferwise</h5>
                  <div>
                    <span className='blue4'></span>  <span className='hell'>1-5%</span>
                  </div>
                </div>

              </div>
              <div className='helloicon'>
              <i class="fa-brands fa-google-pay hi5"></i>
                <span className='blue5'></span>
              </div>

            </div>
          </div>

        </div>


        {/* table */}
        <div className='table1'>

          <div className='balancetwo'>

            <div className='tableheadname'>
              <div className='trans'>
                Transaction
              </div>
              <div className='today'>
                <ul>
                  <li>Today</li>
                  <li>This Week</li>
                  <li className='text-bold'>This Month</li>
                </ul>
              </div>

            </div>

            <table>

              <tr className='header'>
                <td>Data and time</td>
                <td>Payment method</td>
                <td>Status</td>
                <td>Amount ($)</td>
              </tr>

<tr className='brdr6'></tr>
              
              <tr className='dta'>
                <td>17 Feb 2020, 16:30</td>
                <td>   <img src={mastercard} className="logo1"/>Mastercard</td>
                <td>Pending</td>
                <td>-400.00 $</td>
              </tr>
              <tr className='brdr6'></tr>

              <tr className='dta'>
                <td>14 Feb 2020, 12:39</td>
                <td> <i class="fa-brands fa-paypal logo2"></i>PayPal</td>
                <td>Pending</td>
                <td>-250.00 $</td>

              </tr>
              <tr className='brdr6'></tr>
              <tr className='dta'>
                <td>12 Feb 2020, 09:45</td>
                <td><img src={qiwi} className='logo3'></img>Qiwi</td>
                <td>Done</td>
                <td>+1000.00 $</td>

              </tr>

              <tr className='brdr6'></tr>

              <tr className='dta'>
                <td>10 Feb 2020, 12:39</td>
                <td><img src={webm} className='logo4'></img>Webmoney</td>
                <td>Pending</td>
                <td>-250.00 $</td>
              </tr>

            </table>

          </div>


          <div className='balancestatistictwo'>
            <div className='ie'>
              Income / Expense
            </div>
            <div className='incomedata'>
              <div className='incomeicon'>
                <OpenInNewOutlinedIcon className='incomepay'></OpenInNewOutlinedIcon>
              {/* <i class="fa-duotone fa-arrow-up-right-from-square incomepay"></i> */}
              {/* <i class="fa-duotone fa-up-right-from-square incomepay"></i> */}
                <span className='incomeback'></span>
              </div>
              <div className='income'>
                $22,578.00
                <div className='extradata'>
                  Total amount expense
                </div>
              </div>
            </div>


            <div className='incomedata'>
              <div className='incomeicon'>
                <SouthWestOutlinedIcon className='incomepay'></SouthWestOutlinedIcon>
                {/* <i class="fa-brands fa-paypal incomepay"></i> */}
                <span className='incomeback2'></span>
              </div>
              <div className='income'>
                $5,783.00
                <div className='extradata'>
                  Total amount income
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default Main