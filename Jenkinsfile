pipeline {
    agent any

    stages {
        stage("run frontend") {
            steps {
             nodejs('Node-24.5.0') {
                sh 'yarn install'
             }
            }
        }

        stage("run backend") {
            steps {
               withGradle() {
                 sh './gradlew -v'
               }
            }
        }
    }
}
