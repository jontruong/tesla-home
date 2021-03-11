import React from 'react';
import Button from './Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Item.css';
import {motion} from 'framer-motion';

const Item = ({title, desc, backgroundImg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, first}) => {
    return (
        <div className='item'  style={{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>
                        {title}
                    </p>
                    <div className="item__textDesc">
                        <p>{desc}</p>
                    </div>
                </div>
            <div className="item__lowerThird">
                <div className="item__buttons">
                    <Button imp='primary' text={leftBtnText} link={leftBtnLink} />
                    {twoButtons && (
                        <Button imp='secondary' text={rightBtnText} link={rightBtnLink} />
                    )}
                </div>
                {first && (
                    <motion.div
                    animate={{y:10}}
                    transition={{type:"spring", damping:1}}>
                    <div className="item__expand">
                    <ExpandMoreIcon />
                    </div>
                    </motion.div>

                )}
            </div>
            </div>
        </div>
    )
}

export default Item
