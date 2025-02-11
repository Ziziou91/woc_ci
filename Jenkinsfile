pipeline {
    agent any

    tools {
        nodejs 'Node-23' // The name must match your Jenkins configuration
    }

    stages {
        dir("my-app") {
            stage('Install dependencies') {
                steps {
                    echo 'Installing dependecies...'
                    sh 'rm -rf node_modules package-lock.json && npm install'
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
                    sh 'npm test'
                }            
            }

            stage('Run Sonarqube') {
                environment {
                    scannerHome = tool 'woc_sonar'
                }
                steps {
                    withSonarQubeEnv(credentialsId: 'lil-sonar-credentials', installationName: 'woc sonar') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }

            stage('Release') {
                steps {
                    echo 'this is my release stage'
                }
            }
        }
    }
} 