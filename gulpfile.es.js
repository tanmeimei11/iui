import fs from 'fs'
import gulp from 'gulp'
import bump from 'gulp-bump'
import semver from 'semver'
import {rm, cp, exec} from 'shelljs'
// import { exec } from 'child_process'

// === publish the package ===
// git push origin --delete tag 1.0.1
// major: 1.0.0
// minor: 0.1.0
// patch: 0.0.2
let newVersion
let versionType = 'patch'
let run = exec

gulp.task('bump', () => {
  let packageJson = () => { return JSON.parse(fs.readFileSync('./package.json', 'utf8')) }
  let json = packageJson()
  newVersion = semver.inc(json.version, versionType)
  gulp.src('./package.json')
    .pipe(bump({ version: newVersion, type: versionType }))
    .pipe(gulp.dest('./'))
})

gulp.task('npm:run:build', ['bump'], (cb) => {
  run('npm run build', cb)
})

gulp.task('git:tag', ['npm:run:build'], (cb) => {
  run(`git tag -a ${newVersion} -m "Tagging ${newVersion}"`, cb)
})

gulp.task('git:push:tags', ['git:tag'], (cb) => {
  run('git push --tags', cb)
})

gulp.task('copy:to:in', ['git:push:tags'], (cb) => {
  rm('-rf', '../InPromo/2017/in-ui/demo/dist')
  cp('-rf', './dist', '../InPromo/2017/in-ui/demo/dist/')
  cb()
})

// name: kehao.qiu
// password: 123qq123
// email: kehao.qiu@gmail.com
gulp.task('npm:publish', ['copy:to:in'], (cb) => {
  run('npm publish', cb)
})

gulp.task('version:minor', () => { versionType = 'minor' })
gulp.task('version:major', () => { versionType = 'major' })
gulp.task('npm:publish:minor', ['version:minor', 'npm:publish'])
gulp.task('npm:publish:major', ['version:major', 'npm:publish'])
