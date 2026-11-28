import React from 'react';

import  Card from '../../../components/Card';
import Button from '../../../components/Button';

import { Button as ShadCNButton } from '../../../components/ui/button';

function HomeCard() {
    return (
        <div>
            <Card content={"Card 1"} />
            <Card content={"Card 2"} />

            <Button />
            <ShadCNButton>Ok</ShadCNButton>
            <ShadCNButton variant="outline">Cancel</ShadCNButton>
        </div>
    )
}

export default HomeCard;