const game = {
    width: 900,
    height: 500,
    ball_x: 0,
    ball_y: 0,
    ball_speed: 0,
    paddle_1: 0,
    paddle_2: 0
}

export const start_game = () => {
    const calc = Math.random()
    game.ball_speed = calc > 0.5 ? 1 : -1
    

    return game
}

export const key_handling = () => {

}