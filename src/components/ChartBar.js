import { useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import MultiType from './ChartZoom/MultiType';

export default function ChartBar() {
    const [first, setFirst] = useState('relevance')
    console.log(first);
    return (
        <Card>
            <CardHeader color="pink" contentPosition="center">
                <h6 className="uppercase text-gray-200 text-xs font-medium">
                    Overview
                </h6>
                <h2 className="text-white text-3xl capitalize">{first}</h2>
            </CardHeader>
            <CardBody>
                <div className="relative h-96">
                    <MultiType setFirst={setFirst} />
                </div>
            </CardBody>
        </Card>
    );
}
