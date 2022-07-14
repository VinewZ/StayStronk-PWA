// To use this, you need to import it in your component:
// import { FakeApi } from './FakeApi';
// You can then use it in your component:
// axios.get('/api/exercises');

import { createServer } from "miragejs"

createServer({
    routes() {
        this.namespace = "api"

        this.get("/exercises", () => {
            return [
                {
                    "bodyPart": "waist",
                    "equipment": "body weight",
                    "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0001.gif",
                    "id": "0001",
                    "name": "3/4 sit-up",
                    "target": "abs"
                },
                {
                    "bodyPart": "waist",
                    "equipment": "body weight",
                    "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0002.gif",
                    "id": "0002",
                    "name": "45° side bend",
                    "target": "abs"
                },
                {
                    "bodyPart": "waist",
                    "equipment": "body weight",
                    "gifUrl": "http://d205bpvrqc9yn1.cloudfront.net/0003.gif",
                    "id": "0003",
                    "name": "air bike",
                    "target": "abs"
                }
            ]
        })
        this.get("/bodyparts", () => {
            return ["back", "cardio", "chest", "lower amrs", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"]
        })
    }
})