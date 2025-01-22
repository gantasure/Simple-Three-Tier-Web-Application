pipeline {
  agent any
  triggers {
    githubPush()
  }
  stages {
    stage('Build and Push Docker Image') {
      steps {
        git branch: 'main', url: 'your_git_repo_url'
        sh 'docker build -t three-tier-app .'
        withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh "docker login -u $USERNAME -p $PASSWORD"
            sh 'docker tag three-tier-app:latest your_dockerhub_username/three-tier-app:latest'
            sh 'docker push your_dockerhub_username/three-tier-app:latest'
        }
      }
    }
    stage('Deploy to EC2') {
        steps {
            sshPublisher(publishers: [sshPublisherDesc(configName: 'ec2-server',
                                                        transfers: [sshTransfer(cleanRemote: false,
                                                                             excludes: '',
                                                                             execCommand: '''
                                                                                 #!/bin/bash
                                                                                 docker stop three-tier-app || true
                                                                                 docker rm three-tier-app || true
                                                                                 docker pull your_dockerhub_username/three-tier-app:latest || true
                                                                                 docker run -d -p 80:80 --name three-tier-app your_dockerhub_username/three-tier-app:latest
                                                                                 echo "Deployment Complete"
                                                                             ''',
                                                                             flatten: false,
                                                                             makeEmptyDirs: false,
                                                                             noDefaultExcludes: false,
                                                                             remoteDirectory: '/home/ubuntu',
                                                                             removePrefix: '',
                                                                             sourceFiles: '')],
                                                        usePromotion: false,
                                                        useRetry: false)],
                         continueOnError: false,
                         failOnError: true,
                         hostKeyAlias: '',
                         publishEvenIfNothingToTransfer: false,
                         retryTimes: 0,
                         timeout: 120000)
        }
    }
  }
}
