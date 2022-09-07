import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Jack',
            text: 'Let me get the ugly out of the way first. The industry as a whole completely botched the release of this generation of consoles.',
        },
        {
            name: 'Maria',
            text: 'So, yeah, new generation of hardware from Microsoft but can I talk about that box? Because that was a spectacular way to jump into the next Xbox.',
        },
        {
            name: 'Anna',
            text: 'I now own both the Series X and the PS5 so I will simply say this about the Series X. It is very well built and the design has silent fans and the console heat is channeled through the top making it efficient. What I like is it is not as big as the PS5.',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSand = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <h2>Reviews</h2>
            {reviews.map((review: Review, i: number) => (
                <Card
                    variant="outlined"
                    style={{
                        margin: '20px 0',
                        background: '#e7e6e6',
                    }}
                    key={i}
                >
                    <CardContent>
                        <Typography variant="h6">{review.name}</Typography>
                        <Typography variant="h6">{review.text}</Typography>
                    </CardContent>
                </Card>
            ))}
            <Card
                variant="outlined"
                style={{
                    maxWidth: 400,
                    justifyContent: 'center',
                    display: 'flex',
                }}
            >
                <CardContent>
                    <form onSubmit={onSand}>
                        <Typography variant="h6">
                            Pleace leave a review
                        </Typography>
                        <div>
                            <TextField
                                size="small"
                                value={newReview.name}
                                onChange={handleChangeName}
                            />
                        </div>
                        <br />
                        <TextareaAutosize
                            minRows={5}
                            value={newReview.text}
                            onChange={handleChangeText}
                        />
                        <div>
                            <Button variant="outlined" type="submit">
                                Leave review
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}

export default Reviews
