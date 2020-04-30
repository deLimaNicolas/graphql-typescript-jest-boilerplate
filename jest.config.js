module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        "\\.(gql|graphql)$": "jest-transform-graphql",
        ".*": "babel-jest"
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
}
