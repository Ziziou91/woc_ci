pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                echo 'Installing dependecies...'
                sh 'rm -rf node_modules package-lock.json && npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Static Analysis') {
            steps {
                sh './node_modules/eslint/bin/eslint.js -f checkstyle src > eslint.xml'
            }
            post {
                always {
                    recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml') 
                }
            }

        }

        stage('Test') {
            steps {
                echo 'this is my test stage'
            }            
        }

        stage('Release') {
            steps {
                echo 'this is my release stage'
            }
        }
    }
} 