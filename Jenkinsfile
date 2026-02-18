pipeline {
    agent { label 'slave_build_angular' }

    tools {
        nodejs 'node'
    }

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/cheikhtourad19/event.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Angular App') {
            steps {
                sh 'npm run build -- --configuration production'
            }
        }
    }

    post {
        success {
            echo '✅ Build Angular réussi'
        }
        failure {
            echo '❌ Échec du build'
        }
    }
}
