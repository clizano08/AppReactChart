import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
    RadialLinearScale
} from 'chart.js';
import { Bar, Doughnut, Line, Pie, PolarArea, Radar, Bubble } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    PointElement,
    LineElement,
    Filler,
    RadialLinearScale
);

//Diseño
const options = {
    maintainAspectRatio: false,//Para que bootstrap mande
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }
    },
};



//Bar
const inicioBar = {//se inicializa el bar con valores nulos
    labels: [""],
    datasets: [
        {
            label: 'Total Ventas',
            data: [0],
            backgroundColor: 'rgba(54, 162, 235)',
        }
    ],
};

//Line
const inicioLine = {
    labels: [""],
    datasets: [
        {
            label: 'Total Ventas',
            data: [0],
            borderColor: 'rgba(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235)',
        }
    ],
};

//Area
const inicioArea = {
    labels: [""],
    datasets: [
        {
            fill: true,
            label: 'Total Ventas',
            data: [0],
            borderColor: 'rgba(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.25)',
        },
    ],
};

//Radar
const inicioRadar = {
    labels: [""],
    datasets: [
        {
            label: '#Total Ventas',
            data: [0],
            borderColor: 'rgba(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.25)',
            borderWidth: 1,
        },
    ],
};
//-----------------------------------------------------------------------------------------------------------------------

//Donut
const inicioDonut = {
    labels: [""],
    datasets: [
        {
            label: '# of Votes',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
        },
    ],
};

//Pie
const inicioPie = {
    labels: [""],
    datasets: [
        {
            label: '# of Votes',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',

            ],
            borderWidth: 1,
        },
    ],
};

//Polar
const inicioPolar = {
    labels: [""],
    datasets: [
        {
            label: '# of Votes',
            data: [0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',

            ],
            borderWidth: 1,
        },
    ],
};



const App = () => {

    const [dataBar, setDataBar] = useState(inicioBar)

    const [dataLine, setDataLine] = useState(inicioLine)

    const [dataArea, setDataArea] = useState(inicioArea)

    const [dataRadar, setDataRadar] = useState(inicioArea)

    const [dataDonut, setDataDonut] = useState(inicioDonut)

    const [dataPie, setDataPie] = useState(inicioPie)

    const [dataPolar, setDataPolar] = useState(inicioPolar)

    useEffect(() => {
        fetch("api/reporte/ResumenSemana")
            .then(response => { return response.json() })
            .then(responseJson => {
                console.log(responseJson)

                //Bar
                const labelsBar = responseJson.ventasSemana.map(item => (item.fecha))
                const valuesBar = responseJson.ventasSemana.map(item => (item.total))

                const contenidoBar = {
                    labels: labelsBar,
                    datasets: [
                        {
                            label: 'Total Ventas',
                            data: valuesBar,
                            backgroundColor: 'rgba(54, 162, 235)',
                        }
                    ],
                };
                setDataBar(contenidoBar)

                //Line
                const labelsLine = responseJson.ventasSemana.map(item => (item.fecha))
                const valuesLine = responseJson.ventasSemana.map(item => (item.total))

                const contenidoLine = {
                    labels: labelsLine,
                    datasets: [
                        {
                            label: 'Total Ventas',
                            data: valuesLine,
                            borderColor: 'rgba(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235)',
                        }
                    ],
                };
                setDataLine(contenidoLine)

                //Area
                const labelsArea = responseJson.ventasSemana.map(item => (item.fecha))
                const valuesArea = responseJson.ventasSemana.map(item => (item.total))

                const contenidoArea = {
                    labels: labelsArea,
                    datasets: [
                        {
                            fill: true,
                            label: 'Total Ventas',
                            data: valuesArea,
                            borderColor: 'rgba(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.25)',
                        },
                    ],
                };
                setDataArea(contenidoArea)

                //Radar
                const labelsRadar = responseJson.ventasSemana.map(item => (item.fecha))
                const valuesRadar = responseJson.ventasSemana.map(item => (item.total))

                const contenidoRadar = {
                    labels: labelsRadar,
                    datasets: [
                        {
                            label: 'Total Ventas',
                            data: valuesRadar,
                            borderColor: 'rgba(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.25)',
                            borderWidth: 1,
                        },
                    ],
                };
                setDataRadar(contenidoRadar)

//-----------------------------------------------------------------------------------------------------------------------------------------

                //Doughnut
                const labelsDonut = responseJson.productosSemana.map(item => (item.producto))
                const valuesDonut = responseJson.productosSemana.map(item => (item.total))

                const contenidoDonut = {
                    labels: labelsDonut,
                    datasets: [
                        {
                            label: '# of Votes',
                            data: valuesDonut,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',

                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',

                            ],
                            borderWidth: 1,
                        },
                    ],
                };
                setDataDonut(contenidoDonut)

                //Pie
                const labelsPie = responseJson.productosSemana.map(item => (item.producto))
                const valuesPie = responseJson.productosSemana.map(item => (item.total))

                const contenidoPie = {
                    labels: labelsPie,
                    datasets: [
                        {
                            label: '# of Votes',
                            data: valuesPie,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                               
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                
                            ],
                            borderWidth: 1,
                        },
                    ],
                };
                setDataPie(contenidoPie) 

                //Polar
                const labelsPolar = responseJson.productosSemana.map(item => (item.producto))
                const valuesPolar = responseJson.productosSemana.map(item => (item.total))

                const contenidoPolar = {
                    labels: labelsPolar,
                    datasets: [
                        {
                            label: '# of Votes',
                            data: valuesPolar,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                               
                            ],
                            borderWidth: 1,
                        },
                    ],
                };
                setDataPolar(contenidoPolar)

            })
    }, [])

    return (
        <div className="container mt-2">
            {/*Row 1*/}
            <div className="row">

                {/*Bar*/}
                <div className="col-sm-3">
                    <h2 >Total de Ventas Por Semana</h2>
                    <div style={{ height: 350 }}>
                        <Bar options={options} data={dataBar} />
                    </div>
                </div>

                {/*Line*/}
                <div className="col-sm-3" >
                    <h2 >Total de Ventas Por Semana</h2>
                    <div style={{ height: 350 }}>
                        <Line options={options} data={dataLine} />
                    </div>
                </div>

                {/*Area*/}
                <div className="col-sm-3" >
                    <h2 >Total de Ventas Por Semana</h2>
                    <div style={{ height: 350 }}>
                        <Line options={options} data={dataArea} />
                    </div>
                </div>

                {/*Radar*/}
                <div className="col-sm-3" >
                    <h2 >Total de Ventas Por Semana</h2>
                    <div style={{ height: 350 }}>
                        <Radar options={options} data={dataRadar} />
                    </div>
                </div>

            </div>

            <br></br>
            <hr></hr>
            <br></br>

            {/*Row 2*/}
            <div className="row">
                {/*Donut*/}
                <div className="col-sm-4">
                    <h2 >Productos Mayor Vendidos</h2>
                    <div style={{ height: 350 }}>
                        <Doughnut options={options} data={dataDonut} />
                    </div>
                </div>

                {/*Pie*/}
                <div className="col-sm-4" >
                    <h2 >Productos Mayor Vendidos</h2>
                    <div style={{ height: 350 }}>
                        <Pie options={options} data={dataPie} />
                    </div>
                </div>    

                {/*Polar*/}
                <div className="col-sm-4" >
                    <h2 >Productos Mayor Vendidos</h2>
                    <div style={{ height: 350 }}>
                        <PolarArea options={options} data={dataPolar} />
                    </div>
                </div>

                

            </div>


        </div>
    )

}
export default App;
