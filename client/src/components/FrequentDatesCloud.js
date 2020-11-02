import React from 'react';

import { TagCloud } from 'react-tagcloud';

function FrequentDatesCloud(props) {
    const onTagCloudClick = (dayMonth) => {
        if (!props.dateSelected) {
            return;
        }
        const [day, month] = dayMonth.split('/');
        props.dateSelected(parseInt(day), parseInt(month));
    };

    return (
        <div>
            <h3 className='Heading-text-TagCloud'>Most seen dates</h3>
            <TagCloud
                className='TagCloud'
                minSize={14}
                maxSize={60}
                tags={props.frequentDates}
                onClick={(tag) => onTagCloudClick(tag.value)}
            />
        </div>
    );
}

export default FrequentDatesCloud;
