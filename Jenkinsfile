pipeline {
    agent any

    tools {
        nodejs 'Node-23' // name must match Jenkins configuration
    }

    stages {
            stage('Install dependencies') {
                steps {
                    dir("my-app") {
                        echo 'Installing dependecies...'
                        sh 'rm -rf node_modules package-lock.json && npm install'
                        sh 'npm install -D eslint-formatter-checkstyle'
                    }
                }
            }

            stage('Static Analysis with Lint') {
                steps {
                    dir("my-app") {
                        sh 'npx eslint . --format checkstyle -o eslint.xml || true'
                    }
                }
                post {
                    always {
                        dir("my-app") {
                            recordIssues enabledForFailure: true, aggregatingResults: true, tool: checkStyle(pattern: 'eslint.xml')
                        }
                    }
                }
            }

            stage('Test') {
                steps {
                    dir("my-app") {
                        sh 'npm test'
                    }
                }            
            }

            //stage('Run Sonarqube') {
                //environment {
                //    scannerHome = tool 'woc_sonar'
                //}
                //steps {
                //    withSonarQubeEnv(credentialsId: 'lil-sonar-credentials', installationName: 'woc_sonar') {
                //        sh "${scannerHome}/bin/sonar-scanner"
                //    }
                //}
            //}

            stage('Release') {
                steps {
                    echo 'this is my release stage'
                }
            }
    }
} 